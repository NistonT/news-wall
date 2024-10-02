export interface IGetNews {
	id: Number;
	title: String;
	description: String;
	isPublished: Boolean;
}

export interface IPostNews {
	id?: Number;
	title?: String;
	description?: String;
	isPublished?: Boolean;
}

export interface IUpdateNews {
	id?: Number;
	title?: String;
	description?: String;
	isPublished?: Boolean;
}

export interface IDeleteNews {
	id?: Number;
	title?: String;
	description?: String;
	isPublished?: Boolean;
}
