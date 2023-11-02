import CommentComponent from "./CommentComponent";
const Comments = () => {
    return (
        <CommentComponent>
            <p className="card-title">Admin</p>
                <a className="btn btn-secondary btn-sm" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Trả lời</a>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body my-3">
                        <form method="post" className="">
                            <div className="mb-3">
                                <textarea name="comment" id="" cols="100" rows="5" className="form-control" placeholder="Mời bạn bình luận và đặt câu hỏi" required></textarea>
                            </div>
                            <input type="submit" name="" className="btn btn-primary" value="Gửi" />
                        </form>
                    </div>
                </div>
                <CommentComponent>
                    <p className="card-title">Hello</p>
                </CommentComponent>
        </CommentComponent>
        
    );
}

export default Comments;
