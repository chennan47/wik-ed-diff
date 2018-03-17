import test from 'ava';
import WikEdDiff from '../wikEdDiff';

test('test edit', (t) => {
  const wikEdDiff = new WikEdDiff();
  const diffHtml = wikEdDiff.diff('the dog is white', 'the cat is white');

  const expectedOutput = '<div class="wikEdDiffContainer" id="wikEdDiffContainer"><pre class="wikEdDiffFragment" style="white-space: pre-wrap;">the <span class="wikEdDiffDelete" title="-">dog</span><span class="wikEdDiffInsert" title="+">cat</span> is white</pre></div>';

  t.is(diffHtml, expectedOutput);
});

test('test move', (t) => {
  const wikEdDiff = new WikEdDiff();
  const diffHtml = wikEdDiff.diff('the dog', 'dog the');

  const expectedOutput = '<div class="wikEdDiffContainer" id="wikEdDiffContainer"><pre class="wikEdDiffFragment" style="white-space: pre-wrap;"><span class="wikEdDiffMarkRight"title="the" id="wikEdDiffMark1"onmouseover="wikEdDiffBlockHandler(undefined, this, \'mouseover\');"></span><span class="wikEdDiffDelete wikEdDiffDeleteBlank" title="-"><span class="wikEdDiffSpace"><span class="wikEdDiffSpaceSymbol"></span> </span></span>dog<span class="wikEdDiffInsert wikEdDiffInsertBlank" title="+"><span class="wikEdDiffSpace"><span class="wikEdDiffSpaceSymbol"></span> </span></span><span class="wikEdDiffBlock"title="▶" id="wikEdDiffBlock1"onmouseover="wikEdDiffBlockHandler(undefined, this, \'mouseover\');">the</span></pre></div>';

  t.is(diffHtml, expectedOutput);
});
