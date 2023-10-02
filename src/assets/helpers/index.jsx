export function Theme(listOfMessages) {
    this.id = new Date();
    this.info = listOfMessages;
    this.title = (listOfMessages?.length > 0 ? listOfMessages[0][0].slice(0, 20) : '');
}