import { useForm } from "react-hook-form";
import axios from "../utils/axios.js";
import { toast } from "react-toastify";
import { useState } from "react";

export default function PostEditor({ addPost }) {
  const { register, handleSubmit, reset, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const content = watch("content", "");

  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("/twits", data)
      .then((response) => {
        toast.success("Tweet gönderildi!");
        addPost(response.data.twit);
        reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Bir hata oluştu");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl mb-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("content", { required: true, maxLength: 160 })}
          placeholder="Düşüncelerini yaz..."
          className="w-full h-32 p-4 border border-gray-100 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#ff7e3e] text-gray-700 text-lg"
        />
        <div className="flex justify-between items-center mt-4">
          <span className={`text-sm ${content.length > 160 ? 'text-red-500' : 'text-gray-400'}`}>
            {content.length} / 160
          </span>
          <button
            type="submit"
            disabled={isLoading || !content.trim() || content.length > 160}
            className="bg-[#ff7e3e] text-white px-8 py-2 rounded-full font-bold hover:opacity-90 disabled:opacity-50 transition-all shadow-md"
          >
            {isLoading ? "Gönderiliyor..." : "Gönder"}
          </button>
        </div>
      </form>
    </div>
  );
}