/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mDETbxCzYdj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-4xl px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              File Upload
            </h1>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">
                Uploaded Files
              </h2>
            </div>
            <div className="px-6 py-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 truncate">
                      File1.pdf
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      2.3 MB
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 truncate">
                      Image1.jpg
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      1.5 MB
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 truncate">
                      Document1.docx
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      4.1 MB
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50 truncate">
                      Presentation1.pptx
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      6.7 MB
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      href="#"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              Upload New File
            </button>
          </div>
        </div>
      </main>
      <div
        aria-labelledby="modal-title"
        aria-modal="true"
        className="fixed z-10 inset-0 overflow-y-auto"
        id="file-upload-modal"
        role="dialog"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
          <span
            aria-hidden="true"
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
          >
            ​
          </span>
          <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-600">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-indigo-600 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50"
                  id="modal-title"
                >
                  Upload a New File
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select a file to upload to your account.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="file-upload"
                  >
                    File
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          htmlFor="file-upload"
                        >
                          <span>Upload a file</span>
                          <input
                            className="sr-only"
                            id="file-upload"
                            name="file-upload"
                            type="file"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                type="button"
              >
                Upload
              </button>
              <button
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
