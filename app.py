from flask import Flask, render_template,request
from datetime import datetime

app=Flask(__name__)
    
@app.route('/')
def index():          
    return render_template('index.html')

@app.route('/<dataForm>',methods = ['POST'])
## manual manipulation of the system
def handleRequest(dataForm):
    print(request.json);                   
    return dataForm
    
                              
if __name__=='__main__':    
    app.run(debug=True, port=5000, host='0.0.0.0')
    #local web server http://192.168.1.61:5000/
    #after Port forwarding Manipulation http://xx.xx.xx.xx:5000/
