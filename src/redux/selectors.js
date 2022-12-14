export const getContacts = ({contacts}) => contacts.items;

export const getFilter = ({contacts}) => contacts.filter;

export const getFilteredContacts = (({contacts, filter}) => {
    const filterNormal = filter.toLowerCase();
    const result = contacts.items.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        return normalizedName.includes(filterNormal)
    })
    return result;
});

export const getAuthError = ({auth}) => auth.error || {};

export const isAuth = ({auth}) => auth.isLogin;

export const getUser = ({auth}) => auth.user;

// export const getUser = state => state.auth.user.name;