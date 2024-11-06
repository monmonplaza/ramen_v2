import React from 'react'
import ModalWrapper from '../../partials/modals/ModalWrapper'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import { X } from 'lucide-react'
import { StoreContext } from '@/components/store/storeContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '@/components/helpers/queryData'
import { setIsAdd, setMessage, setSuccess, setValidate } from '@/components/store/storeAction'
import { InputText } from '@/components/helpers/formInputs'
import * as Yup from "Yup"
import { Formik, Form } from 'formik'

const CategoryModalAdd = ({itemEdit}) => {
  const {dispatch, store} =React.useContext(StoreContext)

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/category/${itemEdit.category_aid}` : `/v2/category`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false))
        dispatch(setSuccess(true))
      } else {
        dispatch(setValidate(true))
        dispatch(setMessage(data.error))
      }
    },
  });

  const initVal = {
    category_title: itemEdit ? itemEdit.category_title : '',
    category_title_old: itemEdit ? itemEdit.category_title : '',
  }

  const yupSchema = Yup.object({
    category_title: Yup.string().required('Required'),
  })

  const handleClose = () => dispatch(setIsAdd(false))

  return (
    <ModalWrapper>
    <div className="modal-main bg-primary z-50 max-w-[300px] w-full rounded-md animate-slideUp">
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
              <div className="modal-header p-2 border-b border-line flex justify-between items-center">
                <h6 className="mb-0 leading-none text-dark">
                {itemEdit ? "Edit" : "Add"} 
                </h6>
                <button onClick={handleClose} type="button">
                  <X />
                </button>
              </div>
              <div className="modal-body p-2 px-4">
                <div className="input-wrap">
                <InputText
                  label="Category"
                  type="text"
                  name="category_title"
                  disabled={mutation.isPending}
                />
                </div>
              </div>
              <div className="modal-footer flex py-2 px-4 border-t border-line justify-end gap-3">
                <button
                  className="btn btn-accent !text-xs"
                  type="submit"
                >
                   {mutation.isPending ? <SpinnerButton/> : 'Save'}
                </button>
                <button
                  className="btn btn-cancel !text-xs"
                  type="reset"
                  onClick={()=> dispatch(setIsAdd(false))}
                >
                  Cancel
                </button>
              </div>
          </Form>
          );
        }}
      </Formik>
    </div>
  </ModalWrapper>
  )
}

export default CategoryModalAdd