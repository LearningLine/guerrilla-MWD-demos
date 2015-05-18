function callback(data) {
    var posts = data.data.children
        .map(function(obj) {
            return obj.data;
        })
        .filter(function(post) {
            return !post.over_18;
        })
        .map(function(post) {
            return {
                title: post.title,
                url: post.url,
                thumbnail: post.thumbnail,
                numComments: post.num_comments
            };
        })
        .filter(function(post) {
            return post.thumbnail && !(post.thumbnail === 'self' || post.thumbnail === 'default');
        })
    ;

    posts
        .forEach(function(post) {
            var newLI = document.createElement('li');
            var img = document.createElement('img');
            img.src = post.thumbnail;
            newLI.appendChild(img);
            newLI.appendChild(document.createTextNode(post.title));
            document.getElementById('posts').appendChild(newLI);
        })
    ;

    var sum = posts.reduce(function(previous, current) {
        return previous + current.numComments;
    }, 0);

    console.log(sum);

    var avg = posts.reduce(function(p, c, i) {
        return p + (c.numComments - p) / (i + 1);
    }, 0);

    console.log(avg);
}
