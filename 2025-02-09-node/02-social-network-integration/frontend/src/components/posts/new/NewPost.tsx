import { useForm } from "react-hook-form";
import "./NewPost.css";
import PostDraft from "../../../components/models/post/PostDraft";
import profileService from "../../services/auth-aware/profile";
import loadingImageSource from "../../../assets/images/2cbb5e95b97aa2b496f6eaec84b9240d.gif";
import { useAppDispatch } from "../../../redux/hooks";
import { newPost } from "../../../redux/profileSlice";

export default function NewPost(): JSX.Element {
  const { register, handleSubmit, reset, formState } = useForm<PostDraft>();

  const dispatch = useAppDispatch();

  async function submit(draft: PostDraft) {
    try {
      const newPostFromServer = await profileService.create(draft);
      reset();
      dispatch(newPost(newPostFromServer));
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="NewPost">
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="title"
          {...register("title", {
            required: {
              value: true,
              message: "you must provide a title",
            },
            minLength: {
              value: 10,
              message: "title must be 10 chars long",
            },
          })}
        />
        <span className="error">{formState.errors.title?.message}</span>
        <textarea
          placeholder="post body"
          {...register("body", {
            required: {
              value: true,
              message: "you must provide a body",
            },
            minLength: {
              value: 20,
              message: "body must be 10 chars long",
            },
          })}
        />
        <span className="error">{formState.errors.body?.message}</span>
        {!formState.isSubmitting && <button>Add Post</button>}
        {formState.isSubmitting && (
          <p>
            posting new post...{" "}
            <i>
              <img src={loadingImageSource} />
            </i>
          </p>
        )}
      </form>
    </div>
  );
}
