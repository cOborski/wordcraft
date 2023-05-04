/**
 * @license
 *
 * Copyright 2023 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ==============================================================================
 */
import {Examples} from './base';

export interface ElaborateExample {
  text: string;
  toElaborate: string;
  target: string;
}

export const exampleData = [
  {
    text: 'The long shadow of the tree crept up the sidewalk',
    toElaborate: 'the tree',
    target:
      'It was an old oak tree on the main street of a small town, the branches spread as large as the sky.',
  },
  {
    text: 'The car came bouncing down the hill and came to an abrupt stop in my driveway',
    toElaborate: 'the car',
    target:
      'It was an old, old Model-T Ford, with brass fittings, and no doors',
  },
  {
    text: 'My pencil sits on top of the desk, left there since ‌the events‌ of last Saturday',
    toElaborate: 'last Saturday',
    target:
      'It was one of those Saturdays that starts off like any other but you have the feeling that something is about to stir. You wake up with the same amount of enthusiasm but you get up from bed a little slower than usual. You know this is going to be a busy day',
  },
  {
    text: "She wasn't really upset about what had happened at the lab the other day; she was never one to dwell on mistakes.",
    toElaborate: 'what had happened',
    target:
      'She had accidentally left the microorganisms alone for far too long. The lab, or what was left of it, was now filled with a strong aroma of their slime-- they had devoured all the metal, wood, and plastic they could find',
  },
];

class ElaborateExamples extends Examples<ElaborateExample> {}

export const examples = new ElaborateExamples(exampleData);
