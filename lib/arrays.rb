genres = %w[rock pop jazz indie]

# C-reate
genres << 'house'
genres.push('classical')

# R-ead
puts genres[1]

# U-pdate
genres[0] = 'blues'

# D-elete
genres.delete_at(1) # deletes 'pop'
