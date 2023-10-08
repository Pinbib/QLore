$ URl = http://localhost:3000

! --yellow URl: @URL

GET @URl
? login = true
<<< ERROR

POST @URL
? login = true
<<<

DELETE @URL
? login = true
<<<

PUT @URL
? login = true
<<<

PATCH @URL
? login = true
<<<

HEAD @URL
? login = true
<<<

OPTIONS @URL
? login = true
<<<