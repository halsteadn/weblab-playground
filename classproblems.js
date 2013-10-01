document.write("<h3>Movie Sortation</h3>");

/* STEP ONE: */

var movies = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];


var movieSort = function (movies) {
    /* STEP TWO?? is WHATS the INPUT and WHATS the OUTPUT? one array coming out in a different array*/
    var result = [];
    for (var index = 0; index < movies.length; index++) {
        var items = movies[index].split(",");
        var movie = {
            title: items[0],
            year: parseInt(items[1]),
            votes: parseInt(items[2]),
        };
        result.push(movie);
    }
    var sort = function (lhs, rhs) {
        if (lhs.year < rhs.year) {
            return -1;
        } else if (lhs.year > rhs.year) {
            return 1;
        } else if (lhs.vote > rhs.vote) {
            return -1;
        } else {
            return 0;
        }
    }
    return result.sort(movieSort);
}
document.write("<pre>" + 
        JSON.stringify(movieSort(movies), null, '  ') + "</pre>");

