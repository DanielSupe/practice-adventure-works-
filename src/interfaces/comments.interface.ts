export interface createComment {
  productId: number;
  userId: number; 
  content: string; 
}

export interface updateComment {
    id: number;
    userId: number;
    content?: string;
}

export interface commentServices {
    createComment(comment: createComment): Promise<any>,
}