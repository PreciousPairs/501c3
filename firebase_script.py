import firebase_admin
from firebase_admin import credentials, db

# Replace with the actual contents of your Firebase credentials JSON
firebase_credentials = {
    "type": "service_account",
    "project_id": "pp501c3-disaster-relief-effort",
    "private_key_id": "2b47c63030e89da9ac2f51d1a971dfdc42c1d1ab",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDzO+rp0qMbHRrZ\nlwPGTA5Pc18ozNfio7ttv+97G+U8Cc03WKVqtAGXvGmy495aJe9oUjhVDEn25KXX\nkByhAEbiq/VqiLYh8K5HYRTKUpHyJIsoV5D1KFstUkpCqhBTwXvoOcqvXda1knJH\nlKcp0wEFybM+JpKeA+q/Nr7zHUcPJ1z4LC6Qm2uwPYY+c9yLo4JBKvuVaYqqwlPL\nI0O3ZjRBSP3hvkdeoItLz4Q95othiPfGPUMz9uI9StQdOHlYCeCVMS3foPM3kFGp\nbr6rD2WlqNnsjkpB0SNg0UTOWOdLUUwtUFdCnPYfn+r9XHgkq3DYJxRkLP/+tGbm\nwvtSN6UJAgMBAAECggEAD9QjAREn8+Jgnk8ba+bEaiN1Cn3NIUa8MmPSkPmDYRU2\ntX63chKRhXc5ji6RyF5OXoS2PYOhlxdxWu46DLisxEDCRWrs5lfIMaU10gZOUNqT\nsz4ClQ+polEH+99fFWJCnt3O7Ltftvx3IyUffUNp3j9uYpGmSjHxT3z/r2jE+G17\n/qrQ+7uGTLbgz0QeYzPirej2KyQZPj0z7q+zaPfC5QVPZwbVweB/xT5mCma9KPmZ\n346C2p5qJXNan16cFQLaa+Wkj4SSl/wF3cB+Rr53JCb4x4jhK+4DV1LZSy38In2d\nyvJFceW0cdBIfBSKqQb04ELWsY+nmbq58EpQ89kVgQKBgQD8K/u9/DAsQhir6cVo\nwtNolutRfI3kxoFmkog/dE7TO1XA3TPeINXs83nQ5RN9Og+1QDkQoRbsbAIF79HJ\ndWIcGQizKSfmC06nFuBhBPw8FEkCoEZ2dCBHn9LRlIVhO93IrCkXkTh8EjY/OUuk\nocUmRXjikQuv9Lb0TMH3ITt2gQKBgQD27TMMoJqEBGgI3TpkTwNLOHo6tOhR/l4p\n5AePFxrmEx7y5Xp3ASK4HH6XNvQUmgBH2UkqFHIVSzfUMF+Zd1li2p5ySNvce0Pj\ngUE5ZtqSr/zqg13d4lfsHPDv+Lg+8IArZChErCOID0ZfjLDedjhBB+lrcosuDoRv\nK/ChQow6iQKBgGatjhKcpgzPWPZe+IeglK5IjUafvbMCdNwMHDgiJppx1YfzSdRP\ncGvL87TwIZBi3NSDcvjnbssTa3t5W+V4y1r/goBY6KsNvZfhg7lda0sXQ2czVZ2T\nyTUAybmWjPy7gKHeH9k9w08Zp0b1EGzXhcwAi6lNQAIEVZ6BxpTWzjyBAoGAVS9V\naijJxXuDrHMtnsdHWp7cQ/5/GzJGp+r71J",
    "client_email": "firebase-adminsdk-d6ay7@pp501c3-disaster-relief-effort.iam.gserviceaccount.com",
    "client_id": "110037385115154772373",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d6ay7%40pp501c3-disaster-relief-effort.iam.gserviceaccount.com"
}

# Initialize Firebase
cred = credentials.Certificate(firebase_credentials)
firebase_admin.initialize_app(cred)

# Set up Firebase configuration
def setup_firebase_config():
    # Your Firebase configuration
    firebase_config = {
        "apiKey": "AIzaSyCHNQngmUbT5M4umupmojjQR81kFFzR2CA",
        "authDomain": "pp501c3-disaster-relief-effort.firebaseapp.com",
        "databaseURL": "https://pp501c3-disaster-relief-effort-default-rtdb.firebaseio.com",
        "projectId": "pp501c3-disaster-relief-effort",
        "storageBucket": "pp501c3-disaster-relief-effort.appspot.com",
        "messagingSenderId": "49301030001",
        "appId": "1:49301030001:web:ebb036978a0a5c0d0b87d0",
        "measurementId": "G-95H4J5D5EP"
    }
    return firebase_config

# Initialize Firebase with configuration
def initialize_firebase_with_config(firebase_config):
    try:
        app = firebase_admin.initialize_app(cred, name="my-app", options={"databaseURL": firebase_config["databaseURL"]})
        print("Firebase initialized with custom configuration")
    except Exception as e:
        print(f"Error initializing Firebase with custom configuration: {e}")

# Retrieve data from Realtime Database
def get_data_from_database():
    try:
        ref = db.reference('path_to_your_data')  # Replace with the actual path to your data
        data = ref.get()
        return data
    except Exception as e:
        print(f"Error retrieving data from the database: {e}")
        return None

# Example usage
if __name__ == "__main__":
    # Set up and initialize Firebase with custom configuration
    firebase_config = setup_firebase_config()
    initialize_firebase_with_config(firebase_config)
    
    # Retrieve and print data from the database
    data = get_data_from_database()
    if data:
        print("Data from the database:")
        print(data)
