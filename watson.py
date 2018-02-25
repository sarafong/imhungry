from __future__ import print_function
import json
import re
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, EntitiesOptions, SentimentOptions, KeywordsOptions

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
    file = open("sentientdata.txt","w")
    if score>=-1 and score<-0.8:
        file.write("1500\n")
        file.write("icecream,dessert\n")
        file.write("1,2\n")
        print("Sounds like you need some Ice Cream") #distance: close
    elif score>=-0.8 and score<-0.6:
        file.write("1500\n")
        file.write("coffee,cafe\n")
        file.write("1,2\n")
        print("Let's go to a coffee shop")
    elif score>=-0.6 and score<0.4:
        file.write("5000\n")
        file.write("burger,hotdog,fastfood\n")
        file.write("1,2\n")
        print("When in doubt, fast food never hurts") #distance not relavant 
    elif score>=0.4 and score<0.8:
        file.write("5000\n")
        file.write("chinese,italian,mexican\n")
        file.write("1,2\n")
        print("You seem pretty relaxed, how about some takeout")
    else:
        file.write("20000\n")
        file.write("sushi,healthy,steak\n")
        file.write("2,3,4\n")
        print ("You seem happy, let's celebrate with some good food")
    file.close()
