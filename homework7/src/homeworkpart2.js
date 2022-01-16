let book = {
    title:" The robots of dawn",
    title2:"Mockingjay",
    author:"Isaac Asimov",
    author2:"Suzanne Collins",
    readingStatus:false


}
function info (myBook){
    delete myBook.readingStatus;
    if(myBook.readingStatus == "true"){
        console.log(`Already read ${myBook.title} by ${myBook.author}`);

    } else (myBook.readingStatus == "false") 
        console.log(`You still need to read ${myBook.title2} by ${myBook.author2}`);
    

}
info(book);