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
 * @fileoverview Utility service for tests, in order to validate that relevant
 * constructs occur in given code snippets.
 */

tie.factory('CodeCheckerService', [
  function() {
    // TODO(eyurko): Add check that definition occurs at line start.
    var _checkIfFunctionExistsInCode = function(functionName, code) {
      var functionDefinition = 'def ' + functionName;
      return code.indexOf(functionDefinition) !== -1;
    };

    var _checkIfClassDefinitionExistsInCode = function(className, code) {
      var classDefinitionPattern = new RegExp('class ' + className +
                                              '\\((object)?\\):');
      return code.match(classDefinitionPattern) !== null;
    };

    return {
      checkIfFunctionExistsInCode: function(functionName, code) {
        return _checkIfFunctionExistsInCode(functionName, code);
      },
      checkIfClassDefinitionExistsInCode: function(className, code) {
        return _checkIfClassDefinitionExistsInCode(className, code);
      },
      // TODO(eyurko): Add check that function exists in specified class.
      checkIfFunctionExistsInClass: function(functionName, className, code) {
        var fullClassNamePrefix = className + '.';
        if (functionName.startsWith(fullClassNamePrefix)) {
          var strippedFunctionName = functionName.substring(
            fullClassNamePrefix.length);
          return _checkIfFunctionExistsInCode(strippedFunctionName, code);
        }
        return false;
      }
    };
  }
]);
