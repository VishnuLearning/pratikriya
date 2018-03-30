const form = {
    "name": "Teacher Feedback",
    "createdBy": "Abhinav Dayal",
    "sections": [
        {
            "name": "aptitude",
            "questions": [
                {
                    "text": "What Benefits you have gained from your teacher (multiple choices)",
                    "name": "benefits",
                    "qType": "checkbox",
                    "choices": [
                        {
                            "text": "Enhances our thinking ability",
                            "score": 3
                        },
                        {
                            "text": "Increases our interest in the subject",
                            "score": 3
                        },
                        {
                            "text": "Gives useful insights as to how the topic we are studying is relevant today",
                            "score": 2
                        },
                        {
                            "text": "Helps students identify important questions to pass in university Exam",
                            "score": 2
                        },
                        {
                            "text": "Not very helpful. We mostly study on our own",
                            "score": -1
                        }
                    ]
                },
                {
                    "text": "What kind of assignments teacher gave you during this course (multiple choices)",
                    "name": "assignments",
                    "qType": "checkbox",
                    "choices": [
                        {
                            "text": "Projects / Activities that enhances practical understanding of the subject",
                            "score": 5
                        },
                        {
                            "text": "Several problems to solve (numerical, programs, comprehensions etc.)",
                            "score": 3
                        },
                        {
                            "text": "Theoretical questions to answer that are important for exam",
                            "score": 2
                        },
                        {
                            "text": "Teacher did not give any assignments to us",
                            "score": -1
                        }
                    ]
                },
                {
                    "text": "What kind of In-Class assessment teacher gave (multiple choices)",
                    "name": "assessments",
                    "qType": "checkbox",
                    "choices": [
                        {
                            "text": "class tests with multiple sets of questions",
                            "score": 5
                        },
                        {
                            "text": "Asking questions in class",
                            "score": 5
                        },
                        {
                            "text": "Teacher did not do any in-class assessment",
                            "score": -1
                        }
                    ]
                },
                {
                    "text": "Teacher helps student in realizing career goals",
                    "name": "career goal",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Yes",
                            "score": 10
                        },
                        {
                            "text": "No",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "How do you find teacher's way of teaching",
                    "name": "Style",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Makes difficult topics easy to understand",
                            "score": 10
                        },
                        {
                            "text": "Consfues us for moderate or difficult topics",
                            "score": 5
                        },
                        {
                            "text": "Not good. We only go there for attendance",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "Teacher completes course:",
                    "name": "completion",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "in time and at a uniform pace",
                            "score": 10
                        },
                        {
                            "text": "in time but speeds up at the end",
                            "score": 7
                        },
                        {
                            "text": "does not complete and give notes at the end",
                            "score": 4
                        },
                        {
                            "text": "does not complete nor give notes",
                            "score": -1
                        }
                    ]
                }
            ]
        },
        {
            "name": "behaviour",
            "questions": [
                {
                    "text": "Teacher's respect towards student was",
                    "name": "respect",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Excellent",
                            "score": 10
                        },
                        {
                            "text": "Good",
                            "score": 8
                        },
                        {
                            "text": "Satisfactory",
                            "score": 6
                        },
                        {
                            "text": "Unsatisfactory",
                            "score": 2
                        }
                    ]
                },
                {
                    "text": "How would you rate Teacher's punctuality",
                    "name": "punctuality",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Always comes on time and encourages students to be punctual",
                            "score": 10
                        },
                        {
                            "text": "Always comes to class on time but does not mind if students come late",
                            "score": 7
                        },
                        {
                            "text": "Does not always come on time but forces students to come on time",
                            "score": 2
                        },
                        {
                            "text": "Neither comes on time not bothers about student's punctuality",
                            "score": -1
                        }
                    ]
                },
                {
                    "text": "How well dressed is your Teacher?",
                    "name": "dressing",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Excellent",
                            "score": 10
                        },
                        {
                            "text": "Good",
                            "score": 8
                        },
                        {
                            "text": "Satisfactory",
                            "score": 6
                        },
                        {
                            "text": "Unsatisfactory",
                            "score": 2
                        }
                    ]
                },
                {
                    "text": "How would you rate Teacher's accessibility in person?",
                    "name": "accessibility",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Friendly and available to answer any doubt outside class",
                            "score": 10
                        },
                        {
                            "text": "Available but does not encourage questions beyond university exam",
                            "score": 8
                        },
                        {
                            "text": "Does not encourage us to meet outside of class",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "How would you rate Teacher's accessibility online?",
                    "name": "online presence",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Uses online forums and answers doubts promptly",
                            "score": 10
                        },
                        {
                            "text": "Give online access but usually does not respond",
                            "score": 5
                        },
                        {
                            "text": "Not available online",
                            "score": "0"
                        }
                    ]
                },
                {
                    "text": "Teacher acts as a role model",
                    "name": "role model",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Yes",
                            "score": 10
                        },
                        {
                            "text": "No",
                            "score": 0
                        }
                    ]
                }
            ]
        },
        {
            "name": "communication",
            "questions": [
                {
                    "text": "The primary language of instruction used by teacher is",
                    "name": "language",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Telugu",
                            "score": 0
                        },
                        {
                            "text": "English",
                            "score": 10
                        }
                    ]
                },
                {
                    "text": "Teacher encourages and corrects students to speak in English",
                    "name": "English",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Yes",
                            "score": 10
                        },
                        {
                            "text": "No",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "Teacher provides timely and useful feedback",
                    "name": "Feedback",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Yes. It helps us evaluate our progress",
                            "score": 10
                        },
                        {
                            "text": "No. We don't get to know how effectively we are learning",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "How would you rate your Teachers Blackboard work",
                    "name": "blackboard",
                    "qType": "radio",
                    "choices": [
                        {
                            "text": "Very neat and clearly understandable",
                            "score": 10
                        },
                        {
                            "text": "Ok. We can understand it but wish it can be better",
                            "score": 5
                        },
                        {
                            "text": "Ugly. We cant understand much from the board",
                            "score": 0
                        }
                    ]
                },
                {
                    "text": "Please rate your Teacher's discussions in class (multiple choice)",
                    "name": "discussions",
                    "qType": "checkbox",
                    "choices": [
                        {
                            "text": "Encourages asking questions in class",
                            "score": 3
                        },
                        {
                            "text": "Encourages multiple ways to solve any problem",
                            "score": 2
                        },
                        {
                            "text": "Gives positive comments on good performance",
                            "score": 3
                        },
                        {
                            "text": "Helps poor performers by counseling",
                            "score": 2
                        },
                        {
                            "text": "Mostly teacher speaks and does not encourage discussions",
                            "score": -1
                        },
                        {
                            "text": "Criticizes students a lot and uses harsh words",
                            "score": -5
                        }
                    ]
                },
                {
                    "text": "The Teacher uses following teaching aids (multiple choice)",
                    "name": "Teaching Aids",
                    "qType": "checkbox",
                    "choices": [
                        {
                            "text": "Blackboard",
                            "score": 2
                        },
                        {
                            "text": "Presentations etc. on Projector",
                            "score": 2
                        },
                        {
                            "text": "Practical Demonstrations in class",
                            "score": 2
                        },
                        {
                            "text": "Online quizzes, notes, videos etc.",
                            "score": 2
                        },
                        {
                            "text": "Online discussion forums",
                            "score": 2
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = form