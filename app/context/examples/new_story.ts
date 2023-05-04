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

export interface NewStoryExample {
  topic: string;
  target: string;
}

export const exampleData: NewStoryExample[] = [
  {
    topic: 'A space monkey needs to escape from his dying planet.',
    target:
      "It was a cold, dark night on an unknown planet. In a field, a male monkey was pacing back and forth. He had been trying to figure something out, but nothing seemed to be working. He didn't have much time left.",
  },
  {
    topic: 'A medieval romance where a group of colorful knights do battle.',
    target:
      'The green knight rode atop his majestic, beautiful horse, across fields of pure green. In his palm was a magical, sparkling golden sword.',
  },
  {
    topic:
      'An old man with a magical box tries to solve a mystery as his memories gradually fade away.',
    target:
      'The old man decided that he should look inside the box, and in the box there was a key. The old man couldn’t quite remember why he had a key, but he knew the key was important.',
  },
  {
    topic:
      "A coven of witches have taken up residence outside of a quiet mountain town, but they're not interested in witchcraft, they're interested in making hip-hop.",
    target:
      'An evil looking tree was growing off in the distance with no leaves and long, pointy branches. It was a sickly green and was swaying eerily without the wind.',
  },
  {
    topic:
      'After an ancient sea-worn bottle washes up on the shores of Tripoli, a group of rag-tag pirates open it up to find a map leading to a magical treasure.',
    target:
      "A group of pirates set out to sea in search of a magical treasure - a long, sparkling blue necklace called the night's eye.",
  },
];

class NewStoryExamples extends Examples<NewStoryExample> {}

export const examples = new NewStoryExamples(exampleData);
