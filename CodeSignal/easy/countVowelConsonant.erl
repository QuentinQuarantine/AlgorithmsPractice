count([], Count) ->
    Count;

count([Head|Tail], Count) ->
    case Head of
        $a -> count(Tail, Count+1);
        $e -> count(Tail, Count+1);
        $i -> count(Tail, Count+1);
        $o -> count(Tail, Count+1);
        $u -> count(Tail, Count+1);
        _ -> count(Tail, Count+2)
    end.
    
    

countVowelConsonant(S) ->
    count(S, 0).
