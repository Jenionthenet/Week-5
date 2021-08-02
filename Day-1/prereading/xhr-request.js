const request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
        console.log(this);
    }
};
request.open("GET", "test.txt")
request.send();

