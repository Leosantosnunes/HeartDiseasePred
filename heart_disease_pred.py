# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.metrics import roc_auc_score
from sklearn.model_selection import train_test_split, GridSearchCV
import app;

heartcsv = pd.read_csv('C:/Users/leona/Desktop/Projects/HeartDiseaseProj/heart.csv')

y = heartcsv['HeartDisease']
categorical_cols = ['Sex', 'ChestPainType', 'RestingECG', 'ExerciseAngina', 'ST_Slope']
heartcsvVal = pd.get_dummies(heartcsv, prefix=categorical_cols, dtype=float)

disease_features = ['Age', 'RestingBP', 'Cholesterol', 'FastingBS', 'MaxHR', 'Oldpeak',
                    'Sex_F', 'Sex_M', 'ChestPainType_ASY', 'ChestPainType_ATA', 'ChestPainType_NAP', 'ChestPainType_TA',
                    'RestingECG_LVH', 'RestingECG_Normal', 'RestingECG_ST', 'ExerciseAngina_N', 'ExerciseAngina_Y',
                    'ST_Slope_Down', 'ST_Slope_Flat', 'ST_Slope_Up']
X = heartcsvVal[disease_features]

heart_disease_model = DecisionTreeClassifier(max_depth=3, min_samples_leaf=0.10, random_state=1)

adb_heart_disease = AdaBoostClassifier(estimator=heart_disease_model, n_estimators=100)
adb_heart_disease.fit(X,y)
def predict_result(data):
    # Process 'data' accordingly
    result = adb_heart_disease.predict_proba(data)[:, 1]
    return result
# result = adb_heart_disease.predict_proba(app.dataForm)[:, 1]
# score = roc_auc_score(y, adb_heart_disease_proba)
# print(result)


