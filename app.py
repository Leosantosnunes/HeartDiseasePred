from flask import Flask, render_template,request
import numpy as np
import pandas as pd
from datetime import datetime
import heart_disease_pred

app=Flask(__name__)  
@app.route('/')
def index():          
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def handleRequestResult():
    dataForm = request.json  # Get the JSON data from the request
    print("dataForm test", dataForm)
    
    if dataForm is not None and isinstance(dataForm, dict):
        print(dataForm)
        formatted_data = pd.DataFrame.from_dict(dataForm, orient='index').T
        print(formatted_data)
        
        # Make predictions using the formatted data
        result = heart_disease_pred.predict_result(formatted_data)
        result = np.array2string(result[0])
        return result
    else:
        return "Invalid data format", 400  # Return an error response if data is invalid

                              
if __name__=='__main__':    
    app.run(debug=True, port=5000, host='0.0.0.0')
    #local web server http://192.168.1.61:5000/
    #after Port forwarding Manipulation http://xx.xx.xx.xx:5000/
