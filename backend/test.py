from twilio.rest import Client
import random
from twilio.base.exceptions import TwilioRestException
account_sid = 'AC508029190d7fbec5bd0351ef0825e696'
auth_token = '9552e242109987b34ed142351d009072'
client = Client(account_sid, auth_token)
status = "unknown"
otp = random.randint(1000, 9999)

url = "https://quickcrop.netlify.app"


def sendMessage(mobile):
    try:
        message = client.messages.create(
            from_='+15673688597',
            body="welcome to quickcrop website",
            to='+' + mobile
        )
        status = "sent"
        return otp, status
    except TwilioRestException as e:
        status = "failed"
        print(status)
        return None, status


print(sendMessage("918080362871"))
