// Copyright 2017 The TIE Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Question data for Best Meeting Location for N People in
 * a Manhattan-like City.
 */

globalData.questions['manhattan'] = {  // eslint-disable-line dot-notation
  title: 'Best Meeting Location for N People in a Manhattan-like City',
  starterCode: {
    python:
`def manhattan(people):
    return ""
`
  },
  auxiliaryCode: {
    python:
`class AuxiliaryCode(object):
    @classmethod
    def takeTheAverage(cls, people):
        num = len(people)
        x = 0
        y = 0
        for p in people:
            [dx, dy] = p.split(', ')
            x += dx
            y += dy
        x /= num
        y /= num
        return str(x) + ', ' + str(y)
`
  },
  tasks: [{
    instructions: [
      [
        'N people live in a city with streets that form a regular 2D grid. ',
        'They start out at different intersections and want to meet up. ',
        'They are only able to move along the roads (no crossing blocks diagonally etc.). ',
        'Find the meeting place that minimizes the total travel distance. ',
        'Write a function manhattan(people) that returns a meeting place that minimizes the total travel distance.'
      ].join(''),
      [
        'The input is a str list indicating the coordinates of the people in a 2D grid. ',
        'Your function should return a str indicating the best meeting point for N people. ',
        'For instance, the best meeting point for 3 people at ',
        '"0, 0", "4, 2" and "2, 4" is "2, 2".'
      ].join('')
    ],
    prerequisiteSkills: ['Math', 'Sorting'],
    acquiredSkills: ['Math', 'Sorting'],
    inputFunctionName: null,
    outputFunctionName: null,
    mainFunctionName: 'manhattan',
    correctnessTests: [{
      input: ['0, 0', '4, 2', '2, 4'],
      allowedOutputs: ['2, 2']
    }, {
      input: ['0, 0', '5, 6', '4, 5', '8, 9'],
      allowedOutputs: ['4, 5', '4, 6', '5, 5', '5, 6']
    }, {
      input: [],
      allowedOutputs: ['']
    }],
    buggyOutputTests: [{
      buggyFunctionName: 'AuxiliaryCode.takeTheAverage',
      messages: [
        "The best meeting point is not necessarily the centroid of all the people. ",
        "Could that be somewhere else?"
      ]
    }],
    performanceTests: []
  }, {
    instructions: [
      [
        'You might notice that some inputs have more than one possible "best" meeting point. ',
        'Can you modify your manhattan function to return a list of all of the best meeting points?'
      ].join('')
    ],
    prerequisiteSkills: ['Math', 'Sorting'],
    acquiredSkills: ['Math', 'Sorting'],
    inputFunctionName: null,
    outputFunctionName: null,
    mainFunctionName: 'manhattan',
    correctnessTests: [{
      input: ['0, 0', '4, 2', '2, 4'],
      allowedOutputs: [['2, 2']]
    }, {
      input: ['0, 0', '5, 6', '4, 5', '8, 9'],
      allowedOutputs: [['4, 5', '4, 6', '5, 5', '5, 6']]
    }, {
      input: [],
      allowedOutputs: ['']
    }],
    buggyOutputTests: [],
    performanceTests: []
  }],
  styleTests: [{
    evaluationFunctionName: 'allowOnlyOneFunction',
    expectedOutput: true,
    message: [
      'You should only be writing code in a manhattan function. While ',
      "decomposition is generally a good idea, you shouldn't need more than ",
      'just this function for this question.'
    ].join('')
  }]
};

