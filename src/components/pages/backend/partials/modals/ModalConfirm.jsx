import { CircleHelp, X } from "lucide-react";
import React from "react";
import ModalWrapper from "./ModalWrapper";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import {
  setIsConfirm,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction";
import SpinnerButton from "../spinners/SpinnerButton";

const ModalConfirm = ({ mysqlApiArchive, queryKey, item, active, refetch }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsConfirm(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record updated"));
      }
    },
  });

  const handleYes = async () => {
    mutation.mutate({
      isActive: active ? 1 : 0,
    });
  };

  const handleClose = () => {
    // dispatch(setIsAnimating(false));
    // setTimeout(() => {
    //   dispatch(setIsAnimating(true));
    dispatch(setIsConfirm(false));
    // }, 500);
  };

  return (
    <ModalWrapper>
      <div className="modal-main bg-primary z-50 max-w-[350px] w-full rounded-md">
        <div className="modal-header p-2 border-b border-line flex justify-between items-center">
          <h6 className="mb-0 leading-none text-warning">
            Confirm {active ? "Restore" : "Archive"}
          </h6>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className="modal-body p-2 px-4 text-center">
          <div className="size-[40px] mt-2 bg-warning bg-opacity-30 grid place-content-center rounded-full mx-auto">
            <CircleHelp className="stroke-warning" strokeWidth={1} size={30} />
          </div>
          <p className="mt-3 mb-5 text-balance">
            Are your sure you want to {active ? "restore" : "archive"} this
            record - "{item}" Are you sure you want to continue?
          </p>
        </div>

        <div className="modal-footer flex py-2 px-4 border-t border-line justify-end gap-3">
          <button
            className="btn btn-warning !text-xs"
            type="submit"
            onClick={handleYes}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <SpinnerButton />
            ) : active ? (
              "Restore"
            ) : (
              "Archive"
            )}
          </button>
          <button
            className="btn btn-cancel !text-xs"
            type="reset"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalConfirm;
