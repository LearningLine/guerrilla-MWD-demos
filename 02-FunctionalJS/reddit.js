function displayData(data) {
    console.log(data.data.children);

    var arr = data.data.children;

    // console.log(Array.isArray(arr));

    var jason = {
        name: 'Jason',
        speak: function() {
            console.log('H!');
        }
    };

    var simplified = arr.map(function(value) {
        return value.data;
    });

    console.log(simplified);

    var filtered = simplified.filter(function(value) {
        return value.score > 10;
    });

    console.log(filtered);

    function simplify(value) {
        return value.data;
    }

    function highScore(value) {
        return value.score > 10;
    }

    function toElement(datum) {
        var li = document.createElement('li');

        li.textContent = datum.title;

        return li;
    }

    var final = arr
        .map(simplify)
        .filter(highScore)
    ;

    final.map(toElement).forEach(function(li) {
        document.getElementById('myList').appendChild(li);
    });

    var sum = final.reduce(function(sum, current) {
        return sum + current.score;
    }, 0);

    console.log('sum of score: %d', sum);
}







//
