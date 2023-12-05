#!/usr/bin/env python3

from flask import Flask, render_template,request
from datetime import datetime

app=Flask(__name__)
    
@app.route('/')
def index():          
    return render_template('index.html')

@app.route('/<actionid>',methods = ['POST'])
## manual manipulation of the system
def handleRequest():
               
    return True
    
@app.route('/<farmboard>')
def handleRequest2():
    return True


@app.route('/rpi-action/<RPiactionid>',methods = ['POST'])
## manual manipulation of the system
def handleRequestRPi():
           
    return True
                              
if __name__=='__main__':    
    app.run(debug=True, port=5000, host='0.0.0.0')
    #local web server http://192.168.1.61:5000/
    #after Port forwarding Manipulation http://xx.xx.xx.xx:5000/
