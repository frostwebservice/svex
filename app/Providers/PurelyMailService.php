
<?php
namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Str;

class PurelyMailService
{
    protected $apiToken;
    protected $apiUrl;

    public function __construct()
    {
        // $this->apiToken = config('services.purelymail.api_token');
        $this->apiToken = 'pm-live-0c65ed72-897d-4943-9f80-e7d6ea11e4ee';
        
        $this->apiUrl = 'https://purelymail.com/api/v0/createUser';
    }

    public function createUser($user): array
    {
        $userData = [
            "userName" => Str::replace(' ', '', $user->fullname),
            "domainName" => "socialvex.net",
            "password" => $user->password,
            "enablePasswordReset" => true,
            "recoveryEmail" => $user->email,
            "recoveryEmailDescription" => $user->email,
            "recoveryPhone" => $user->phonenumber,
            "recoveryPhoneDescription" => $user->phonenumber,
            "enableSearchIndexing" => true,
            "sendWelcomeEmail" => true
        ];

        $response = $this->execute($userData);

        if ($response->failed()) {
            // Handle error
            throw new \Exception('Failed to create PurelyMail user.');
        }

        return $response->json();
    }

    protected function execute(array $data): Response
    {
        return Http::withHeaders([
            'accept' => 'application/json',
            'Purelymail-Api-Token' => $this->apiToken,
            'Content-Type' => 'application/json',
            ])->post($this->apiUrl, $data);
    }
}