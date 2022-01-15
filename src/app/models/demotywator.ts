export class Demotywator {
    id?: number;
    topText!: String;
    imagePath!: String;
    bottomText!: String;

    constructor(topText: String, imagePath: String, bottomText: String) {
        this.topText = topText;
        this.imagePath = imagePath;
        this.bottomText = bottomText;
    }
}