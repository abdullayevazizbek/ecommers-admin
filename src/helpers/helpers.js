

export const generateCategoriesList = (categories) => {
    // const {name_uz} =categories
    return categories ? [
        { value: 0, label: 'Glavniy Kategoriy' },
        ...categories?.map((item) => {
            return {
                value: item.id,
                label: item.name_uz
            }
        }),
    ] : []
}

export function slugify(text) {
    const from = 'ãàáäâĕèéëêìíïîõòóöôùúüûñç•/_,:;'
    const to = 'aaaaaeeeeeiiiiooooouuuunc--'
    const newText = text 
    .split('')
            .map((letter, i) =>
                letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
            )
    return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with .replace(/&/g, '-y-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple with single
}