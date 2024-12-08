
//dummy data - name, description, address, phone, email
const data = {
        name: "Nadace Terezy Maxové",
        description: "Nadace Terezy Maxové pomáhá dětem, které se ocitly v těžké životní situaci.",
        address: "Kaprova 42, 110 00 Praha 1",
        phone: "222 222 222",
        email: "NTM@email.cz"
}


const Informations = () => {
    return (
      <div className='w-full h-full text-black'>
          <div className="flex flex-col gap-6 w-2/3 m-auto z-10 pt-14 h-[calc(100vh-56px)]">
              <h1 className="text-4xl">Údaje</h1>
              <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-3xl">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-bold">{data.name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>{data.description}</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex  gap-2">
                                <p className="font-bold">Adresa:</p>
                                <p>{data.address}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-bold">Telefon:</p>
                                <p>{data.phone}</p>
                            </div>
                            <div className="flex gap-2">
                                <p className="font-bold">Email:</p>
                                <p>{data.email}</p>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Informations