# datavio

## Setup backend
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Setup frontend
```
npm install
```

## Start backend server
```
python manage.py runserver
```

## Start frontend server
```
npm start
```

## Celery and queue
```
redis-server # seperate tab
celery -A backend worker
```
