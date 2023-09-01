export default async function Ong({ params }: { params: { name: string } }) {
    const ong = await fetch(`https://vamos-ajudar-api.henriquebarucco.com.br/v1/ong/${params.name}`);

    const jsonData = await ong.json();

    if (ong.status !== 200) {
        return (
            <div className="min-h-screen bg-[#1a1f24] flex justify-center items-center">
                <p className='text-white'>Não foi encontrada nenhuma ong.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#1a1f24] flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md p-8 w-96">
                <h1 className="text-2xl font-bold mb-4">{jsonData.name}</h1>
                <p className="text-gray-600 mb-2">{jsonData.description}</p>
                <p className="text-gray-600 mb-4">Objetivo: {jsonData.goal}</p>
    
                <div className="border-t pt-4">
                    <h2 className="text-lg font-semibold mb-2">Endereço</h2>
                    <p className="text-gray-600">{jsonData.address.street}, {jsonData.address.number}</p>
                    <p className="text-gray-600">{jsonData.address.city}, {jsonData.address.state}, {jsonData.address.postalCode}</p>
                    <p className="text-gray-600">{jsonData.address.country}</p>
                </div>
    
                <div className="border-t pt-4">
                    <h2 className="text-lg font-semibold mb-2">Contato</h2>
                    <p className="text-gray-600">Email: {jsonData.contact.email}</p>
                    <p className="text-gray-600">Telefone: {jsonData.contact.phone}</p>
                    <p className="text-gray-600">Site: {jsonData.contact.website}</p>
                </div>
    
                <div className="border-t pt-4">
                    <p className={`text-${jsonData.verified ? 'green' : 'red'}-600 font-semibold`}>
                        {jsonData.verified ? 'Verificado' : 'Não verificado'}
                    </p>
                    <p className={`text-${jsonData.active ? 'green' : 'red'}-600 font-semibold`}>
                        {jsonData.active ? 'Ativo' : 'Inativo'}
                    </p>
                </div>
    
                <p className="text-gray-600 mt-4">Criado em: {jsonData.createdAt}</p>
            </div>
        </div>
    );
}