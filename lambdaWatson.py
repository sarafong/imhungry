import json
import re
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, SentimentOptions, KeywordsOptions
from firebase import firebase

firebase = firebase.FirebaseApplication('https://hack-the-valley-eea3a.firebaseio.com/', None)

def getSentient(data):
    natural_language_understanding = NaturalLanguageUnderstandingV1(
        version='2017-02-27',
        username='4cf22873-ff53-4542-a966-0ce007daea71',
        password='VM2UsYDKHxVa')

    response = natural_language_understanding.analyze(
        text=data,
        features=Features(entities=EntitiesOptions(), sentiment=SentimentOptions()))

    print (json.dumps(response,indent=2))
    return (json.dumps(response, indent=2))

def getScore(info):
    info = getSentient(info)
    a=re.search(r'\b(score)\b', info)
    return float(info[a.end()+3:a.end()+7])    

def findFood(score):
    ret = ''
    if score>=-1 and score<-0.8:
        firebase.put("Information","Radius","1500")
        firebase.put("Information","Categories","icecream,dessert")
        firebase.put("Information","Price","1,2")
        ret = "Sounds like you need some Ice Cream" #distance: close
    elif score>=-0.8 and score<-0.6:
        firebase.put("Information","Radius","1500")
        firebase.put("Information","Categories","coffee,cafe")
        firebase.put("Information","Price","1,2")
        ret = "Let's go to a coffee shop"
    elif score>=-0.6 and score<0.4:
        firebase.put("Information","Radius","5000")
        firebase.put("Information","Categories","burger,hotdog,fastfood")
        firebase.put("Information","Price","1,2")
        ret = "When in doubt, fast food never hurts" #distance not relavant 
    elif score>=0.4 and score<0.8:
        firebase.put("Information","Radius","5000")
        firebase.put("Information","Categories","chinese,italian,mexican")
        firebase.put("Information","Price","1,2")
        ret = "You seem pretty relaxed, how about some takeout"
    else:
        firebase.put("Information","Radius","20000")
        firebase.put("Information","Categories","sushi,healthy,steak")
        firebase.put("Information","Price","3,4")
        ret = "You seem happy, let's celebrate with some good food"
    return ret

def lambda_handler(event, context):
    return findFood(getScore(event['mood']))