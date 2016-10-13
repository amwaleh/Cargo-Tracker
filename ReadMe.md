
#Cargo-Tracker
_______________________________________________________________________

Simple DRF project that uses angular as frontend

Cargo tracker is a simple project that aims to track cargo for courier company. This App is meant to make it easier for customers to know where the cargo is.

Cargo tracker uses django for back end and Angular 1.1.5 for frontend.
1


##Installation##

 - download this repo
 - `git clone https://github.com/andela-amwaleh/Cargo-Tracker.git`
 - create a virtual environment to ` $ virtualenv env` / `mkvirtualenv env`
 - install dependercies `$ pip install -r requiremt.txt`
 - run migrations 
 
       -  `$ python manage.py makemigrations `
       - `$ python migrate`
 
     



###Routes

| Route                  | Method       | Description                                             |
|------------------------|--------------|---------------------------------------------------------|
| ` /users/<pk>/`        | GET PUT, DEL | Used to update or Delete a individual user              |
| ` /customer/`          | POST GET     | Gets all Customer or Creates a new customer             |
| ` /customer/<pk>/`     | GET PUT, DEL | Used to Get, update or Delete a individual customer     |
| ` /cargo/`             | POST GET     | Used to Get all  Cargo or  create a Cargo               |
| ` /cargo/<pk>/`        | GET PUT, DEL | Used to Get, update or Delete an individual user        |
| ` /transactions/`      | POST GET     | Used to Get all transactions or,create a Transactions   |
| ` /transactions/<pk>/` | GET PUT, DEL | Used to Get, update or Delete an individual Transaction |
| ` /state/`             | POST GET     | Used to Get all,state or,create the state Cargo         |
| ` /state/<pk>/`        | GET PUT, DEL | Used to Get, update or Delete state                     |

