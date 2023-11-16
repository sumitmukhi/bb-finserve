import React from "react";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


interface Props {
    open: any,
    onClose: any,
    title: string,
    file: string
}

export const Modal = ({ open, onClose, title, file }: Props): JSX.Element => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <div className={`relative z-10 max-sm:z-[99] max-sm: ${open ? "visible" : "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end max-sm:items-start justify-center p-4 text-center sm:items-center max-sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg max-sm:rounded-none bg-white text-left shadow-xl transition-all max-w-[fit-content] sm:my-8 sm:w-full max-sm:max-w-md">
                        <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="items-start shadow-sm flex gap-2 pl-4 pr-28 max-md:flex-wrap max-md:pr-5">
                                <img
                                    onClick={onClose}
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f370e4b2-db2f-41e4-892e-5d1b31fa62fd?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square cursor-pointer object-contain object-center w-8 overflow-hidden self-stretch max-w-full mr-5"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af030e1-2996-4552-a5f4-20b541cdae92?apiKey=54f59c00fe214313b710779cabd91fdd&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                                />
                                <div className="text-white text-base font-medium self-center whitespace-nowrap my-auto">
                                    {title}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-h-[500px] max-sm:max-h-full overflow-auto">
                            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <p>
                                Page {pageNumber} of {numPages}
                            </p>
                        </div>
                        {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                            <button onClick={onClose} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}