/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { axiosInstance } from "../../utils/axios";
import { useParams } from "react-router-dom";
import { mutate } from "swr";
import { useAuthUser } from "react-auth-kit";

let toggleDialogAddProject = (_state: boolean) => {};

interface IFormInput {
  title: string;
  description: string;
}

const DialodAddProject = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleOpen = () => setOpen(!open);

  const auth = useAuthUser();

  const { id } = useParams<{ id: string }>();

  toggleDialogAddProject = (state: boolean) => {
    setStatus(status);
    if (state) {
      handleOpen();
    } else {
      handleOpen();
    }
  };

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    toast.promise(
      axiosInstance.post("api/v1/project", {
        ...data,
        user_id: auth()?.id,
      }),
      {
        pending: "Loading...",
        success: {
          render() {
            mutate(`/api/v1/project?userId=${auth()?.id}`);
            return `Add task success`;
          },
        },
        error: "Add task failed",
      },
      {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "colored",
      }
    );
    handleOpen();
  };

  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xs">
        <form className="bg-primary" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="text-white">Add Project</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-white">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="rounded-sm px-4 py-2"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="text-white">
                Description
              </label>
              <input
                type="text"
                id="description"
                className="rounded-sm px-4 py-2"
                {...register("description", { required: true })}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <button className="bg-green-900 text-white px-4 py-2 rounded-sm text-sm">
              <span>Confirm</span>
            </button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export { toggleDialogAddProject };
export default DialodAddProject;
