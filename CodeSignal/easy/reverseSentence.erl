reverse([], NewArray) ->
    lists:flatten(lists:join(" ", NewArray));

reverse([Head|Tail], NewArray) ->
    reverse(Tail, [Head] ++ NewArray).


reverseSentence(Sentence) ->
    reverse(string:split(Sentence, " ", all), []).
  
