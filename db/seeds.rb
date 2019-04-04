# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.create(title: 'Waterfall', owner: 'Jon', vote_count: 12)
Photo.create(title: 'Sunset', owner: 'Bob', vote_count: 12)
Photo.create(title: 'Ocean', owner: 'Nick', vote_count: 0)
Photo.create(title: 'Mountain', owner: 'Nick', vote_count: 0)
Photo.create(title: 'Forest', owner: 'Taylor', vote_count: 0)
Photo.create(title: 'Sea', owner: 'Craig')
