function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-purple-500 to-blue-600">
                <div class="w-1/2 bg-white  bg-opacity-50 rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"
                            />
                        </div>
                        <div class="flex flex-col mb 4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Tempat/Tgl Lahir"
                            >
                                Tempat/Tgl Lahir
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-800"
                                    type="text"
                                    name="tempat/tgl lahir"
                                    id="tempat/tgl lahir" 
                            />
                        </div>
                        <div class="flex flex-col mb 4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Jenis Kelamin"
                            >
                                Jenis Kelamin
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-800"
                                    type="text"
                                    name="jenis kelamin"
                                    id="jenis kelamin"
                            />
                        </div> 
                        <div class="flex flex-col mb 4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Alamat"
                            >
                                Alamat
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-800"
                                    type="text"
                                    name="alamat"
                                    id="alamat"
                            />
                        </div>
                        <div class="flex flex-col mb 4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="Agama"
                            >
                                Agama
                                </label>
                                <input
                                    class="border py-2 px-3 text-grey-900"
                                    type="text"
                                    name="agama"
                                    id="agama"
                            />
                        </div>

                        <img src={process.env.PUBLIC_URL + '/desy.jpg'} class="flex-=col mb-1 w-40 h-50" />

                      </form>
                </div>
            </div>
        </>
    );
}

export default Card;