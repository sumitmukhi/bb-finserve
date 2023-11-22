import React, { useEffect } from "react";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Image from 'next/image';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


interface Props {
    open: any,
    onClose: any,
    title: string,
    file: string
}

export const Modal = ({ open, onClose, title, file }: Props): JSX.Element => {

    const [numPages, setNumPages] = useState<number>();
    
    return (
        <div className={`relative z-[99] max-sm: ${open ? "visible" : "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-start justify-center text-center sm:items-center max-sm:p-0">
                    <div className="relative transform overflow-hidden rounded-none bg-white text-left shadow-xl transition-all max-w-full h-[100vh] sm:w-full max-sm:max-w-md">
                        <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="items-start shadow-sm flex gap-2 pl-4 pr-28 max-md:flex-wrap max-md:pr-5">
                                <Image
                                    onClick={onClose}
                                    loading="lazy"
                                    src="/img/f370e4b2-db2f-41e4-892e-5d1b31fa62fd.svg"
                                    alt="Close Modal"
                                    width={80}
                                    height={50}
                                    className="aspect-square cursor-pointer object-contain object-center w-8 overflow-hidden self-stretch max-w-full mr-5"
                                />
                                <Image
                                    loading="lazy"
                                    src="/img/3af030e1-2996-4552-a5f4-20b541cdae92.svg"
                                    alt="PDF Icon"
                                    width={50}
                                    height={50}
                                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                                />
                                <div className="text-white text-base font-medium self-center whitespace-nowrap my-auto">
                                    {title}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-h-full max-sm:max-h-full overflow-auto">
                            <Document
                                file={file}
                                onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                                {Array.apply(null, Array(numPages))
                                    .map((x, i) => i + 1)
                                    .map(page => <Page pageNumber={page} />)}
                            </Document>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}