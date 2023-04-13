import random
from twilio.base.exceptions import TwilioRestException
from twilio.rest import Client
account_sid = 'AC508029190d7fbec5bd0351ef0825e696'
auth_token = 'c3aa1dad5d902ff659e34a61d1ebdf5b'
client = Client(account_sid, auth_token)


def send_message(mobile):
    otp = random.randint(1000, 9999)
    url = "https://quickcrop.netlify.app"
    try:
        message = client.messages.create(
            body="Welcome to QuickCrop! Your Otp is " +
            str(otp)+"! We are here to help you with your farming needs. Please visit our website to get started " + url,
            from_='+15673688597',
            to='+' + mobile
        )
        response = {
            "status": "success",
            "message": "Message sent successfully",
            "otp": otp
        }
        return {"response":  response}
    except TwilioRestException as e:
        response = {
            "status": "error",
            "message": "Message sending failed",
            "otp": "0"
        }
        return {"response":  response}
