export const CONFIG = [
    {
        id: 'name',
        label: 'Name',
        cssStyle: { width: '35%' }
    },
    {
        id: 'bredFor',
        label: 'Bred For',
        cssStyle: { width: '35%' }
    },
    {
        id: 'breedGroup',
        label: 'Breed Group',
    },
    {
        action: (each) => {
            return (
                <a href={`/avbl-dogs/${each.id}`}>View Dogs</a>
            )
        },
    }
]