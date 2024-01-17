export interface ITheme {
    themeToRemove :string;
    themeToAdd :string;
}

export class Theme implements ITheme{
    themeToRemove: string;
    themeToAdd: string;

    constructor(themeToRemove: string, themeToAdd: string){
        this.themeToRemove = themeToRemove;
        this.themeToAdd = themeToAdd;
    }


}

