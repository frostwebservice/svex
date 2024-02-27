import { deepCopy } from '@/utils/deep-copy';
import { emails, labels } from './data';
var tempEmails = [];
class MailApi {
  getLabels(request) {
    return Promise.resolve(deepCopy(labels));
  }

  getEmails(request) {
    const { label, email } = request;

    return new Promise((resolve, reject) => {
      try {
        // Initially we make a copy of all emails.
        // On a real server this will be different since there will be a real DB query.
        if (label == 'inbox' || label == 'sent' || label == 'favorites') {
          axios
            .post('/api/get_emails', {
              email: email,
              label: label
            })
            .then((response) => {
              const removedWelcomeEmails = response.data.filter(
                (email) => email.subject != 'Welcome to Purelymail!'
              );

              const clonedEmails = removedWelcomeEmails;
              tempEmails = response.data;
              let filteredEmails = [];

              // Get all user custom labels
              const customLabels = labels.reduce((acc, label) => {
                if (label.type === 'custom') {
                  acc.push(label.id);
                }

                return acc;
              }, []);

              if (label && customLabels.includes(label)) {
                filteredEmails = clonedEmails.filter((email) =>
                  email.labelIds.includes(label)
                );
              } else {
                switch (label) {
                  case undefined:
                  case 'inbox':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.folder === 'inbox'
                    );
                    break;
                  case 'template1':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.folder === 'template1'
                    );
                    break;
                  case 'all':
                    filteredEmails = [...clonedEmails];
                    break;
                  case 'sent':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.folder === 'sent'
                    );
                    break;
                  case 'trash':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.folder === label
                    );
                    break;
                  case 'favorites':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.folder === 'favorites'
                    );
                    break;
                  case 'important':
                    filteredEmails = clonedEmails.filter(
                      (email) => email.isImportant
                    );
                    break;
                  default:
                  // Do nothing
                }
              }

              filteredEmails.sort((a, b) =>
                a.createdAt < b.createdAt ? 1 : -1
              );

              resolve(filteredEmails);
            });
        }
      } catch (err) {
        console.error('[Mail Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  getEmail(request) {
    const { emailId } = request;

    return new Promise((resolve, reject) => {
      try {
        const clonedEmails = tempEmails;
        // Find the mail
        const email = clonedEmails.find((email) => email.id === emailId);

        if (!email) {
          reject(new Error('Email not found'));
          return;
        }

        resolve(email);
      } catch (err) {
        console.error('[Mail Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const mailApi = new MailApi();
