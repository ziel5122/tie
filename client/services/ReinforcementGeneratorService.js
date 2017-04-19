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
 * @fileoverview Service for generating positive reinforcement when a user
 * submits code based on the tasks that the code passes/fails on.
 */

tie.factory('ReinforcementGeneratorService', [
  function() {

    return {
      getReinforcement: function(questionId, task, codeEvalResult,
        runtimeFeedback) {

        // Getting the question user is working on
        var question = globalData.questions[questionId];

        // Initializing question reinforcement data if not done already
        if (!question.passedList) {
          question.passedList = ['test'];
        }
        if (!question.pastFailsList) {
          question.pastFailsList = {};
        }

        // Go through correctness tests to update reinforcement data
        var correctnessTests = task.getCorrectnessTests();
        var observedOutputs = codeEvalResult.getCorrectnessTestResults();
        var failedCaseSeen = false;
        for (var i = 0; i < correctnessTests.length; i++) {
          var observedOutput = observedOutputs[i];
          if (correctnessTests[i].matchesOutput(observedOutput)) {
            if (correctnessTests[i].getInput() in question.pastFailsList) {
              question.pastFailsList[correctnessTests[i].getInput()] = true;
            }
          } else if (!failedCaseSeen) {
            question.pastFailsList[correctnessTests[i].getInput()] = false;
            failedCaseSeen = true;
          }
        }

        // TODO(shaman-rajan) Generate text to return from reinforcement data
        runtimeFeedback.passedList = question.passedList.slice();
        runtimeFeedback.pastFailsList = {};

        for (var testCase in question.pastFailsList) {
          if (question.pastFailsList[testCase]) {
            runtimeFeedback.pastFailsList[testCase] = true;
          } else {
            runtimeFeedback.pastFailsList[testCase] = false;
          }
        }

        return runtimeFeedback;
      }
    };
  }
]);