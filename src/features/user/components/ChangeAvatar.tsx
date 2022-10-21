import { useState } from "react";
import { changeAvatar, removeAvatar } from "../../../api/userApi";
import { useMutation, useQueryClient } from "react-query";
import Button from "../../../components/Button";

const ChangeAvatar = () => {
  const [success, setSuccess] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const handleSubmit = (e: File): Promise<string> => {
    return changeAvatar(e);
  };

  const mutateUser = useMutation(handleSubmit, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      setSuccess("Succesfully uploaded.");
    },
  });

  const removeMutate = useMutation(removeAvatar, {
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
      setSuccess("Avatar removed.");
    },
  });

  return (
    <div className="flex flex-col gap-1 mb-1 py-5 px-10">
      <h1>Change profile picture</h1>
      <div className="flex flex-col gap-2 shadow w-96 p-5">
        <input
          name="fileupload"
          accept="image/*"
          type="file"
          onChange={(e) => {
            e.currentTarget.files![0] && mutateUser.mutate(e.currentTarget.files![0]);
            setSuccess("Please wait.");
          }}
        />
        <input name="fileupload" type="submit" id="submit" className="hidden" />
        <Button
          onClick={() => removeMutate.mutate()}
          className="shadow w-40 px-5 rounded text-sm font-normal"
        >
          Remove Avatar
        </Button>
        <p className={success !== "Please wait." ? "text-green-500 font-bold" : ""}>{success}</p>
      </div>
    </div>
  );
};

export default ChangeAvatar;
