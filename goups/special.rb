text = 'supermercado superação hiperMERCADO Mercado'

puts text.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive lookbehind
puts text.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative lookbehind
puts text.scan(/(?<!super)mercado/i).join(' ')