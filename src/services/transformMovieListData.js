export const transformMovieListData = movie_data => (
    movie_data.response.groups.map(item => (
        {
            id: item.id,
            title: item.title,
            title_original: item.title_original,
            title_year: `${item.title} (${item.year})`,
            description: item.description,
            description_large: item.description_large,
            image_list: item.image_small,
            image_details: item.image_large,
            image_background: item.image_background,
            duration: item.duration,
            year: item.year,
            rating_code: item.rating_code
        }
    ))
);

export const transformMovieData = item => (
    {
        id: item.common.id,
        title: item.common.title,
        title_original: item.common.title_original,
        title_year: `${item.common.title} (${item.common.date.slice(6,10)})`,
        description: item.common.description,
        large_description: item.common.large_description,
        image_list: item.common.image_snmall,
        image_details: item.common.image_large,
        image_background: item.common.image_background,
        duration: item.common.duration,
        duration_text: item.common.duration.split(':'),
        rating: item.common.extendedcommon.media.rating.code,
        year: item.common.date,
        rating_code: item.common.rating_code,
        //genres: item.common.extendedcommon.genres.genre,
        genres: item.common.extendedcommon.genres.genre.map(genre => genre.desc),
        //roles: item.common.extendedcommon.roles.role,
        actors: item.common.extendedcommon.roles.role.filter(role => role.id.includes("13617516")),
        directors: item.common.extendedcommon.roles.role.filter(role => role.id.includes("13617517")),
        writers: item.common.extendedcommon.roles.role.filter(role => role.id.includes("13965643")),
        producers: item.common.extendedcommon.roles.role.filter(role => role.id.includes("13965645"))
    }
);