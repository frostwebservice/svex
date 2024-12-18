<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use ErrorException;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
class PaymentController extends Controller
{
    public function updatePayment(Request $request){
        $email= $request->email;
        $pay_amt = 0;
        if($request->totalAmount=='49') $pay_amt=1; 
        if($request->totalAmount=='129') $pay_amt=2; 
        $data=array(
            'pay_date'=>date('Y-m-d'),
            'pay_amt'=>$pay_amt,
            'message_cnt'=>0,
            'search_cnt'=>0,
            'group_cnt'=>0
        );
        $res = DB::table('users')->where("email",$email)->update($data);
        $number = 0;
        $count = DB::table('invoices')->count();
        if($count==0){
            $number=1;
        }else{
            $id = DB::table('invoices')->latest()->first()->id;
            $number = (int)$id+1;
        }
        $data = array(
            'email'=>$email,
            'currency'=>$request->currency,
            'number' => 'INV-'.$number,
            'status' =>'paid',
            'totalAmount'=>$request->totalAmount
        );
        $res = DB::table('invoices')->insert($data);
        print_r(json_encode($res));
    }
    /** Pay order via stripe */
    public function payByStripe(){
        $sec_key = DB::table('stripe_setting')->where('id',1)->get()->toArray()[0]->sec_key;

        Stripe::setApiKey($sec_key);
        try {
            // retrieve JSON from POST body
            $jsonStr = file_get_contents('php://input');
            $jsonObj = json_decode($jsonStr);
            
            // Create a PaymentIntent with amount and currency
            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount' => $this->calculateOrderAmount($jsonObj->items),
                'currency' => 'usd',
                'description' => 'Social Vex',
                'setup_future_usage' => 'on_session'
            ]);
            
            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];
            return response()->json($output);
            
        } catch (ErrorException $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    /** Calculate order total for stripe */
    public function calculateOrderAmount(array $items): int {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        foreach($items as $item){
            return $item->amount * 100;
        }
    }
    public function getStripeInfo(Request $request){
        $data = DB::table('stripe_setting')->where("id",1)->get()->toArray()[0];
        print_r(json_encode($data));
    }
    public function getPaypalInfo(Request $request){
        $data = DB::table('paypal_setting')->where("id",1)->get()->toArray()[0];
        print_r(json_encode($data));
    }
}