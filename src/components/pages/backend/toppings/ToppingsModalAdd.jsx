import { ImagePlusIcon, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import { setIsAdd, setMessage, setSuccess, setValidate } from "@/components/store/storeAction";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'Yup';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputText, InputTextArea } from "@/components/helpers/formInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";

const ToppingsModalAdd = ({itemEdit}) => {
  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsAdd(false))

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/toppings/${itemEdit.toppings_aid}` :`/v2/toppings`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["toppings"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`))
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))
      }
    },
  });



  const initVal = {
    toppings_title: itemEdit ? itemEdit.toppings_title : '',
    toppings_price: itemEdit ? itemEdit.toppings_price : '',
    toppings_description: itemEdit ? itemEdit.toppings_description : '',
    toppings_title_old: itemEdit ? itemEdit.toppings_title : '',
  }

  const yupSchema = Yup.object({
    toppings_title: Yup.string().required('Required'),
    toppings_price: Yup.string().required('Required'),
    toppings_description: Yup.string().required('Required'),
  })


  return (
    <ModalWrapper>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
            <Form >
              <div className="modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft">
                <div className="modal-header p-3 px-4 pb-0 flex justify-between items-center self-start">
                  <h5 className="mb-0">{itemEdit ? "Edit" : "Add"} Toppings</h5>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>

                <div className="modal-body  p-3 px-4 ">
                  <div className="input-wrap">
                      <InputText
                      label="Topping"
                      type="text"
                      name="toppings_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap">
                    <InputText
                      label="Price"
                      type="text"
                      name="toppings_price"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrap relative">
                    <InputTextArea
                      label="Description"
                      name="toppings_description"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start">
                  <button
                    className="btn btn-accent min-w-[90px] flex justify-center"
                    type="submit"
                  >
                    {mutation.isPending ? <SpinnerButton/> : 'Save'} 
                  </button>
                  <button
                    className="btn btn-cancel min-w-[90px] flex justify-center"
                    type="reset"
                    onClick={handleClose}
                    
                  >
                    Cancel
                  </button>
                </div>
              </div>
              </Form>
            );
          }}
        </Formik>
          
    </ModalWrapper>
  );
};

export default ToppingsModalAdd;
